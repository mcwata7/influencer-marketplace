import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { InfluencerController } from './influencer/influencer.controller';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule, 
    UserModule, 
    UserModule,
    ProfileModule,
    AccountModule,
    ConfigModule.forRoot({envFilePath: ['config/.env.common', 'config/.env.local'], isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    })

  ],
  controllers: [AppController],
  providers: [AppService, ,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      InfluencerController, AppController
    );
  }
};
