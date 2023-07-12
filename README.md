# Microfrontend
In this documentation, we will present some methods and ways to implement Micro Frontends. Since, there are lots of different approaches we can take, it is important to understand each of the approaches and their upsides and downsides.

In this documentation, we first take a look at different approaches and talk about their advantages and disadvantages. 

## What is Microfrontend
A micro frontend is an architecture pattern for building a scalable web application that grows with your development team and allows you to scale user interactions.

In simple terms we want to turn this simple ecommerce which is a monolithic application: 

![Monolithic Single page Application](images/01-Monolith.png)

To this micro frontend type:

![Micro-Frontend](images/02-micro.png)

Each of these single page applications (Market and Cart) are seperate applications which can be created with different Frameworks and developer teams can work on each of them separately without concern about possible conflicts.

With this approach, as long as we can, we should prevent direct connection between the sub-modules -which in this case are Market and Cart modules. We would instead try something like this: 

![Micro-frontend with API](images/03-micro.png)

There is something named `Container` in this architecture which decides when/where to show each Microfrontend.



#### Advantages of using Microfrontends
- Different engineering teams can work on different parts of the project without being concerned about the possible conflicts
- Different parts of the application can be created with different approaches suited to different teams (Which should be managed, though)
- Different Single-page application can use even different engineering styles
- Implementing A/B tests can be easily handled
- Each smaller app is easier to understand and make changes to
- Unit testing is more meaningful.

#### Disadvantages
- The only disadvantage is about E2E tests. Implementing E2E tests in Micro frontend applications can be complex and usually cannot be similar to real-world experience.


## Different Categories of Integration
We need to make sure that container can have access to differet microfrontends we created. In our example, they are `Market` and `Cart`. This is called `integration` and there are multiple ways of doing it. 

We should have in mind, that there is no single perfect solution in integration. There are many solutions, and each of the have their pros and cons and we need to choose the one which suits our application needs better. 

Major categories of integration are: 

1. Build-Time Integration: Compile-Time Integration
2. Run-Time Integration: Client-Side Integration
3. Server Integration

### Build-Time Integration
Also known as Compile-Time Integration, gets access to microfrontend (like `Market`), **before** container gets loaded in the browser. The following is one example of Build-Time Integration:

![Build time integration](images/05-micro.png)

#### Advantages
- Easy to setup and easy to understand the code

#### Disadvantages
- Container has to be re-deployed every time a microfrontend is updated
- Container has full access to sub-module source code which is tempting to tightly couple the Container and microfrontend

### Run-Time Integration
Also known as Client-Side Integration, gets access to microfrontend (like `Market`), **after** container gets loaded in the browser. This way is the more usual ways which being used more in action these days. The following digram is an example of Run-Time Integration: 

![Run-Time Integration](images/06-micro.png)

Run-Time Integration can be implemented using `Webpack Module Federation`. This is the most flexible and performant solution around right now according to the most courses for Microfrontend architecture. 

Setting up the container, needs us to be skilled in `webpack`.

#### Advantages
- the microfrontend (for example Market sub-module in our case) can be deployed independently at any time
- Different versions of the microfrontend (for example Market) can be deployed and Container can decide which one to use

#### Disadvantages
- Tooling and setup is more complicated than the other method

### Server integration
