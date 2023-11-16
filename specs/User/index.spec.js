// import supertest from "supertest";
// import user from "../helper/user";
// import config from "../../config";

// describe('user', () => {
//   describe('POST /api/v1/login', () => {
//     test('Метод должен существовать', async () => {
//       const res = await supertest('https://try.vikunja.io')
//           .post('/api/v1/login')
//           .send({})

//       expect(res.status).not.toEqual(404);
//     })

//     test('Авторизация должна проходить успешно с правильным логином и паролем', async () => {
//         const res = await user.login(config.credentials)      
         
//       expect(res.status).toEqual(200);
//       expect(typeof res.body.token).toEqual('string')
//     })

//     test('Авторизация должна возвращать статус с кодом ошибки если логин неверный', async () => {
//         const res = await user.login({username: 'demo4', password: 'demo'})      
       
//       expect(res.status).toEqual(412);
//       expect(res.body.code).toEqual(1011)
//     })

//     test('Авторизация должна возвращать статус с кодом ошибки если пароль неверный', async () => {
//       const res = await user.login({username: 'demo4', password: 'demo'})

//       expect(res.status).toEqual(412);
//       expect(res.body.code).toEqual(1011)
//     })
//   })
// })


import supertest from "supertest";
import user from "../helper/user";
import config from "../../config";

describe('user', () => {
  describe('POST /Account/v1/GenerateToken', () => {
  
    test('Авторизация должна проходить успешно с правильным логином и паролем', async () => {
        const res = await user.login(config.credentials)      
         
      expect(res.status).toEqual(200);
      console.log(res.body.token)
      // expect(res.body).toBe({})  Можно только статус проверить 
    })

    test('Получение токена', async () => {
         const res = await user.login(config.credentials)
      
      // expect(res.body).toHaveProperty();
      // expect(typeof res.body.token).toEqual('string');

      expect(res.token).toEqual();
      expect(res.result).toEqual();
      expect(res.expires).toEqual();
      expect(res.status).toEqual(200)
    })

    test('Получение информации о пользователе', async () => {
      const res = await user.login(config.credentials)
   
      // expect(res.body).toHaveProperty();
      // expect(typeof res.body.token).toEqual('string');

    expect(res.userID).toEqual(); 
    expect(res.username).toEqual();
    expect(res.books).toEqual();
    expect(res.status).toEqual(200)
    })

    
    test('Удаление пользователя', async () => {
      const res = await user.login(config.credentials)
   
      // expect(res.body).toHaveProperty();
      // expect(typeof res.body.token).toEqual('string');

    expect(res.code).toEqual(); 
    expect(res.message).toEqual();
    expect(res.status).toEqual(200)
    })
    

   

  


  })
})