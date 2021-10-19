const request = require('supertest');
const app = require('../app');

//CheckTodoStatus
test('should Get status 200', async () => {
    const response = await request(app).get('/todos')
    expect(response.status).toBe(200);
});


// //CheckTodoObject
test('should Get blog comments', async () => {
    const testBlogId= '3';
    const response = await request(app).get(`/todos`);
    expect(JSON.parse(response.text)).toEqual(
        expect.arrayContaining([
            expect.objectContaining({id:1})
        ])
    );
});

//CheckPostRequest
test('Check Post', async () => {
    const response = await request(app).post(`/todos`)
        .send({message:'AMMMMMMAR'})
        expect(JSON.parse(response.text)).toEqual(
        expect.arrayContaining([
            expect.objectContaining({id:1})
        ])
    );
});

//CheckPostRequest
test('Check Post', async () => {
    const response = await request(app).post(`/todos`)
        .send({messagee:'AMMMMMMAR'})
        expect(JSON.parse(response.text)).toMatchObject(
            {"data": [], "message": "Missing input", "status": 0}
    );
});


