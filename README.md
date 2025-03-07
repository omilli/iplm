# Interplanetary Language Models (iplm.js)

Run Large Language Models in a privacy-focused, local-first, peer-to-peer progressive web app with offline support.

### Goals

- Offline
- Decentralized
- Anonymous

### Tech Stack

- Hella
- MLC WebLLM
- RxDB
- PicoCSS
- Vite 

## Decentralized LLM

### Model Sharding

`@mlc-ai/web-llm` compatible models are sharded across the iplm network which is powered by `rxdb`. Support for partial and parallel model installs comes out of the box. Models are installed directly from peers.

### Prompt Sharding

Large prompts, or prompts that cover multiple subjects, are sharded into multiple prompts, which are run in parallel via web workers or over the iplm network.

### Configuration

- The app runs client-side checks and sets recommended defaults based on device capabilities. Users can control individual parameters such as `max_tokens`.

## Deep Thinking 

Deep thinking involves a multi-phase approach to understanding and processing user queries:

### Prompt Analysis

- Analyzes initial prompt to build a query intent model
- Identifies key information needs and constraints
- Breaks complex prompts into manageable components
- Maps user terminology to system concepts
- Identifies ambiguities requiring clarification

### Query Intent Model

- Structures user intent with primary goals and constraints
- Maintains hierarchical knowledge between concept relationships
- Maps identified entities to semantic representation
- Tracks confidence scores for each interpreted aspect of the query
- Preserves context across multi-turn interactions
- Constructs a reasoning graph of potential outputs

### Intent Refinement

- Iteratively re-prompts to clarify ambiguities
- Continuously evaluates understanding against query intent model
- Processes complex queries by running prompts in parallel
- Converges on a precise understanding before giving a final answer

## Core Functionality

### Library

- 🟥 Install model from source
- 🟥 Write model to database
- 🟥 Install model using p2p shards
- 🟥 Write model shards to browser cache
- 🟥 Choose prompt model
- 🟥 Create query intent model
- 🟥 Process & display chat

### Network

- 🟥 White list MLC models
- 🟥 Fetch model from source
- 🟥 Write model files to database 

## Architecture

### App

📦src    
 ┣ 📂services  
 ┣ ┣ 📂llm  
 ┣ ┗ 📂worker  
 ┣ 📂ui  
 ┣ ┣ 📂components  
 ┣ ┗ 📂pages  
 ┗ 📂utils  

### Server

📦src      
 ┣ 📂apps  
 ┣ ┗ 📂models  
 ┣ 📂lib  
 ┣ ┣ 📂database  
 ┣ ┣ 📂models  
 ┗ ┗ 📂utils  

 ## Coding Style
 - Functional programming
 - Prefix functions with verbs
 - Only 1 function export per file
 - File name === function export name