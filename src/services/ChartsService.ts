import Charts from '@/types/Charts';
import axios from 'axios';

export class ChartsService {




  async fetch(): Promise<Charts> {
    const res = await axios.get<Charts>("http://localhost:8000/charts")
    return res.data;

  }

}
