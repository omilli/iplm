# Interplanetary Language Models (iplm.js)

Run Large Language Models in a privacy-focused, local-first, peer-to-peer progressive web app with offline support.

### Goals

- Offline
- Decentralized
- Anonymous

### Tech Stack

- Hella
- MLC WebLLM
- PouchDB
- PicoCSS
- Vite 

## LLM Sharding

### Model Sharding

`@mlc-ai/web-llm` compatible models are sharded across the iplm network which is powered by `pouchdb`. Support for partial and parallel model installs comes out of the box. Models are installed directly from peers.

### Prompt Sharding

Large prompts, or prompts that cover multiple subjects, are sharded into multiple prompts, which are run in parallel via web workers.

## Core Functionality

### Client
- 🟢 Server Sync
- 🔴 Install model from source
- 🔴 Write model to database
- 🔴 Install model using p2p shards
- 🔴 Write model shards to browser cache
- 🔴 Choose prompt model
- 🔴 Create query intent model
- 🔴 Process & display chat

### Network
- 🟢 Model Server Sync
- 🟡 Database Services
- 🟠 Model Services
- 🔴 Fetch model from source
- 🔴 Write model files to database 

## Architecture

### Client

📦src    
 ┣ 📂services  
 ┣ ┣ 📂chat  
 ┣ ┣ 📂database
 ┣ ┣ 📂model  
 ┣ ┗ 📂worker  
 ┣ 📂ui  
 ┣ ┣ 📂components  
 ┣ ┗ 📂pages  
 ┗ 📂utils  

### Network

📦src      
 ┣ servers  
 ┣ ┗ 📂model  
 ┣ 📂services  
 ┣ ┣ 📂database  
 ┣ ┣ 📂models  
 ┗ 📂utils  

 ## Coding Style
 - Functional programming
 - Prefix functions with verbs
 - Only 1 function export per file
 - File name === function export name