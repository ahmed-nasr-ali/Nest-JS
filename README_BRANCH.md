# Guard

# use card

## above controller

@UseGuards(AuthenticationGuard)
@Controller('cats')
export class CatsController {}

## above route

@UseGuards(AuthenticationGuard)
@Get()
getAllCustomer() {
return this.customerService.getAllCustomer();
}

# Guard

- u can return true
- u can return error throw new UnauthorizedException();

# Passport

passport will take care of attching user object with user data itself
on request body
