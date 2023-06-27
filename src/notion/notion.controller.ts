import { Body, Controller, Get, Param, Post, Req, ValidationPipe } from '@nestjs/common';
import { NotionService } from './notion.service';
import { PagesDto } from './dto/pages.dto';
import { QueryDto } from './dto/query.dto';
import { Request } from 'express';

@Controller('notion')
export class NotionController {
  constructor(private readonly notionService: NotionService) { }

  @Get(':databaseId')
  async getAll(
    @Param('databaseId') databaseId: string,
    @Req() request: Request
  ): Promise<PagesDto> {
    return await this.notionService.getDatabase(databaseId, request.headers.authorization)
  }

  @Post(':databaseId/query')
  async query(
    @Param('databaseId') databaseId: string,
    @Body(ValidationPipe) query: QueryDto,
    @Req() request: Request
  ): Promise<PagesDto> {
    return await this.notionService.queryDatabase(databaseId, request.headers.authorization, query)
  }
}
