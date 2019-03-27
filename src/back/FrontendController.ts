import { Controller, Get } from '@nestjs/common'

@Controller('')
export class FrontendController {
  @Get('*')
  public async index() {
    const result = `
  <div>
    <div id="root"></div>
    <script src="/index.js" ></script>
  </div>
  `

    return result
  }
}
