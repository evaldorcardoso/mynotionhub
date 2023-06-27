export class RecordDto {
    name: string
    value: string | number | Date

    constructor(properties: Array<any>) {
        this.name = properties[0]
        const values = properties[1]
        switch (values.type) {
            case 'date': {
                this.value = values.date.start
                break
            }
            case 'number': {
                this.value = values.number
                break
            }
            case 'title': {
                this.value = values.title[0].text.content
                break
            }
            default: {
                this.value = 'UNDEFINED'
            }
        }
    }
}