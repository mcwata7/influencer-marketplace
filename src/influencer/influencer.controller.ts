import { Body, Controller, Get, Param, Post, Header, ParseUUIDPipe } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { Influencer } from './interfaces/influencer.interface';
import { CreateInfluencerDto } from './dto/create-influencer.dto';

@Controller('influencer')
export class InfluencerController {
  constructor(private readonly appService: InfluencerService) {}

  @Get(':id')
  getInfluencer(@Param('id', new ParseUUIDPipe({version: '4'})) id: string): Promise<Influencer> {
    return this.appService.getInfluencer(id);
  }

  @Get()
  async getAllInfluencer(): Promise<Influencer[]> {
    return this.appService.getAllInfluencer();
  }

  @Post()
  @Header('Content-Type', 'application/json')
  createInfluencer(@Body() dto: CreateInfluencerDto): Promise<Influencer> {
    return this.appService.addInfluencer(dto);
  }
}
