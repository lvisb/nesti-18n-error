import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import path from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'pt',
      loaderOptions: {
        path: './src/i18n/',
        watch: true,
      },
      resolvers: [new QueryResolver([])],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
