import { Injectable } from '@nestjs/common';
import { Influencer } from './interfaces/influencer.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InfluencerService {
    private readonly influencers: Influencer[] = []

  async getInfluencer(id: string): Promise<Influencer> {
    return this.influencers.find((influencer) => influencer.id == id);
  }

  async getAllInfluencer(): Promise<Influencer[]> {
    return this.influencers;
  }

  async addInfluencer(influencer: Influencer): Promise<Influencer> {
    let influencerId = uuidv4();
    influencer.id = influencerId;
    this.influencers.push(influencer);
    return this.getInfluencer(influencerId);
  }
}
