//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const get_latest_docsEval: EvalFunction = {
    name: 'get_latest_docs Evaluation',
    description: 'Evaluates get_latest_docs tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please provide the latest Solana documentation for the 'developing' section.");
        return JSON.parse(result);
    }
};

const search_docsEval: EvalFunction = {
    name: 'search_docs Evaluation',
    description: 'Evaluates how well the search_docs tool handles queries about Solana documentation',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Where can I find documentation on creating tokens in Solana and is there a code snippet for it?");
        return JSON.parse(result);
    }
};

const get_api_referenceEval: EvalFunction = {
    name: 'Get API Reference Evaluation',
    description: 'Evaluates the retrieval of Solana SDK API reference details',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please provide detailed information about the 'transaction' item in the Solana SDK.");
        return JSON.parse(result);
    }
};

const get_latest_docsEval: EvalFunction = {
    name: 'get_latest_docs Evaluation',
    description: 'Evaluates the retrieval of the requested Solana docs section',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please retrieve the latest details from the 'economics' section of the Solana documentation.");
        return JSON.parse(result);
    }
};

const search_docs: EvalFunction = {
    name: 'search_docs',
    description: 'Evaluates the search_docs tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Where in the Solana documentation can I find instructions on issuing new tokens?");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [get_latest_docsEval, search_docsEval, get_api_referenceEval, get_latest_docsEval, search_docs]
};
  
export default config;
  
export const evals = [get_latest_docsEval, search_docsEval, get_api_referenceEval, get_latest_docsEval, search_docs];