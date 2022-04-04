import { Hero } from 'src/app/hero.interface';
import { HeroServiceService2 } from 'src/app/services/hero.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponentTest', () => {
    it('should type of hero', () => {    
      const component = new DashboardComponent(new HeroServiceService2());
      const hero: Hero = {id: 42, name: 'Test'};
      component.onSelect(hero);
      expect(component.selectedHero).toEqual(hero);
    })
});
