import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(I18nContext.current().t('TEST'))
    return this.appService.getHello();
  }
}
