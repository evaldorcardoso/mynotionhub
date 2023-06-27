import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NotionService } from './notion.service';
import { NotionController } from './notion.controller';
import { NotionClient } from 'src/helper/notion';
import { checkNotionToken } from './middleware/check-notion-token.middleware';

@Module({
  imports: [NotionClient],
  controllers: [NotionController],
  providers: [NotionService, NotionClient]
})
export class NotionModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(checkNotionToken).forRoutes('*')
  }
}
