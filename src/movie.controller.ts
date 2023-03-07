import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';

@Controller('movie')
export class MovieController {
  @Get()
  async getMovie(@Query('title') title: string, @Query('year') year: string) {
    const url = `http://www.omdbapi.com/?t=${title}&y=${year}&apikey=8384263e`;
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }
}
