import { RecordDto } from "./record.dto"

export class PageDto {
    id: string
    createdTime: Date
    updatedTime: Date
    cover?: string
    icon?: string
    parent?: string
    properties: Array<RecordDto>

    constructor(page: any) {
        this.id = page.id
        this.createdTime = new Date(page.created_time)
        this.updatedTime = new Date(page.last_edited_time)
        this.cover = page.cover
        this.icon = page.icon
        this.parent = page.parent?.database_id
        const properties = Object.entries(page.properties)
        this.properties = properties?.map((property: any) => {
            return new RecordDto(property)
        })
    }
}