import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiUseTags } from '@nestjs/swagger'

@Controller('')
@ApiUseTags('frontend')
export class FrontendController {
  @Get('*')
  @ApiOperation({ title: 'Get frontend bundle' })
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
