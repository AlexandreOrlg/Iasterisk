// Importations
import { OpenAI } from 'openai'


export class OpenAiService {
  private openai: OpenAI

  constructor(apiKey: string) {
    this.openai = new OpenAI({ apiKey })
  }

  async getCorrection(value: string, userText: string, callback: (e) => void) {
    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `${value} Do not change sentence words or provide explanations. Your corrections should respect the user's intent and content format.`
          },
          { role: 'user', content: userText }
        ],
        temperature: 0.2,
        stream: true
      })

      for await (const chunk of response) {
        callback(chunk.choices[0]?.delta?.content || '')
      }
    } catch (error) {
      console.error('Failed to get correction from OpenAI:', error)
      throw error
    }
  }
}
