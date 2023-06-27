import { HttpException, HttpStatus } from '@nestjs/common'
import { Client } from '@notionhq/client'
import { QueryDto } from 'src/notion/dto/query.dto'

export class NotionClient {
    constructor(private notion: Client) { }

    public getDatabase = async (databaseId: string, auth: string) => {
        try {
            this.notion = new Client({ auth })
            const response = await this.notion.databases.query({
                database_id: databaseId
            })

            return response.results
        } catch (error) {
            console.error(error)
            throw new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }

    public queryDatabase = async (databaseId: string, auth: string, query: QueryDto) => {
        try {
            this.notion = new Client({ auth })
            const response = await this.notion.databases.query({
                database_id: databaseId,
                filter: query.filter,
                sorts: query.sorts
            })

            return response.results
        } catch (error) {
            console.error(error)
        }
    }
}