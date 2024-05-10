import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import products, { Product } from '../../products';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  })),
});

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3]),
  };

  constructor() {}

  // Get cart from userId,
  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }
  /*  async index(@Request() req): Promise<{ userId: number }> {
    return { userId: req.user.userId };
  }*/

  /*
  Try this in git bash now and you will see the full return:
  Annie@DESKTOP-BH46C1T MINGW64 /c/react/micro-fes-beginner-to-expert (main)
  $ curl http://localhost:8080/cart -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmlhIiwic3ViIjoyLCJpYXQiOjE3MTUzMzg5MjcsImV4cCI6MTcxNTQyNTMyN30.l9iDqiY1a61WWe8OwLRFT7STCr1C_yrltYGaPUJjbWM"
    % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                   Dload  Upload   Total   Spent    Left  Speed
  100  1478  100  1478    0     0  61304      0 --:--:-- --:--:-- --:--:-- 64260{"cartItems":[{"id":2,"name":"Solid Rainbow","price":8.99,"description":"A solid steel of rainbow fidget spinning goodness.","image":"http://localhost:8080/fidget-2.jpg","longDescription":"The Solid Rainbow fidget spinner is a hit. Its full metal body is made from a single piece of steel that takes hours to cut and machine. The center body has been treated with an electroplated natural copper finish that will tarnish over time as it touches your skin, just as the copper toys from the 70s did. The rainbow finish on the outer ring can be customized using various methods, including leaving it raw to see the natural finish on the stainless steel or applying a colored powder coat finish.","quantity":1},{"id":5,"name":"Rainbow Flames","price":7.99,"description":"Flaming rainbow fun for all ages.","image":"http://localhost:8080/fidget-5.jpg","longDescription":"Rainbow Flames are small (1.5″ in diameter or approx. 46mm) fidget spinner toys. They are fun for people of all ages, including adults and kids. Kids love to play with Rainbow Flames because they are easy to spin and they come in assorted colors, like blue, green, red, white, purple and yellow possible combinations. Rainbow Flames fidget spinners are great for killing time; perfect for daydreaming, calming nerves, focusing attention & relaxing; better than nail biting & knuckle cracking. Rainbow Flames fidget spinners can be successfully incorporated into therapy sessions as fidget toys","quantity":1}]}

  * */
}
