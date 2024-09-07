import os
import gradio as gr
import torch
import numpy as np
import cohere
from pdfminer.high_level import extract_text
from transformers import AutoTokenizer, AutoModel

co = cohere.Client("v6WQIUV6lIDVUrDYVPjLSTHxHANhfhW4yZll5W7s")

tokenizer = AutoTokenizer.from_pretrained("law-ai/InLegalBERT")
model = AutoModel.from_pretrained("law-ai/InLegalBERT")

def generate_response(prompt, embeddings):
    avg_embedding = np.mean([np.mean(embed) for embed in embeddings])
    full_prompt = f"Embedding summary: {avg_embedding:.2f}\n\n{prompt}"
    
    try:
        response = co.generate(
            model="command-xlarge-nightly",
            prompt=full_prompt,
            max_tokens=300
        )
        return response.generations[0].text.strip()
    except cohere.error.CohereError as e:
        return f"An error occurred: {str(e)}"

def get_bert_embeddings(texts):
    embeddings_list = []
    for text in texts:
        inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=512)
        with torch.no_grad():
            outputs = model(**inputs)
        embeddings = outputs.last_hidden_state[:, 0, :].squeeze().numpy()
        embeddings_list.append(embeddings)
    return embeddings_list

def process_pdf_and_generate_response(pdf_file, query):
    document_text = extract_text(pdf_file.name)
    text_chunks = [document_text[i:i+512] for i in range(0, len(document_text), 512)]
    document_embeddings = get_bert_embeddings(text_chunks)
    
    prompt = f"Given the document: '{document_text[:2000]}', answer the question: '{query}'"
    response = generate_response(prompt, document_embeddings)
    
    return response

iface = gr.Interface(
    fn=process_pdf_and_generate_response,
    inputs=[
        gr.File(label="Upload PDF Document"), 
        gr.Textbox(label="Query", placeholder="Enter your question here...")
    ],
    outputs=gr.Textbox(label="Response"),
    title="AI-Driven Research Engine for Commercial Courts",
    description="Upload a PDF document and ask a question to get a response generated based on the content of the document."
)

iface.launch(share=True)