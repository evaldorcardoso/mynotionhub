import { Inject, Injectable } from '@nestjs/common';
import { NotionClient } from 'src/helper/notion';
import { PageDto } from './dto/page.dto';
import { PagesDto } from './dto/pages.dto';
import { RecordsDto } from './dto/records.dto';
import { RecordDto } from './dto/record.dto';

@Injectable()
export class NotionService {
    constructor(
        @Inject(NotionClient)
        private notionClient: NotionClient
    ) { }

    async getDatabase(databaseId: string, auth: string): Promise<PagesDto> {
        const pages = await this.notionClient.getDatabase(databaseId, auth)
        if (pages) {
            return {
                pages: pages.map((page) => new PageDto(page)),
                total: pages.length
            }
        }
    }

    async queryDatabase(databaseId: string, auth: string, filter: any): Promise<PagesDto> {
        const pages = await this.notionClient.queryDatabase(databaseId, auth, filter)

        return {
            pages: pages.map((page) => new PageDto(page)),
            total: pages.length
        }
    }
}
