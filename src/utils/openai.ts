import {
  type ChatCompletionRequestMessage,
  type CreateCompletionResponse,
  type CreateCompletionResponseChoicesInner,
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi
} from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

export const openai = new OpenAIApi(configuration);

export { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum };

export interface ChatCompletionStreamResponseChoicesInner extends Omit<CreateCompletionResponseChoicesInner, 'text'> {
  delta: { role?: ChatCompletionRequestMessageRoleEnum; content?: string }[];
}

export interface ChatCompletionStreamResponse extends Omit<CreateCompletionResponse, 'choices'> {
  choices: ChatCompletionStreamResponseChoicesInner[];
}
