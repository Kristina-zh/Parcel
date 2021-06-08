/*
1. Получить все посты /posts
2. Отфильтровать полученный результат где userId = 8
3. Вывести в консоль комментарии ко всем постам юзера с айди 8 /comments?postId=8

Ожидаемый результат https://prnt.sc/13mnvir
*/

const API_URL = 'https://jsonplaceholder.typicode.com';

async function foo() {
  let userId = 8;

  const postsByUserId = await fetch(API_URL + `/posts?userId=${userId}`).then(res => res.json())
  const postsIdArr = postsByUserId.map(v => v.id)

  let result = [];

  for (let id of postsIdArr) {
    const comment = await fetch(API_URL + `/comments?postId=${id}`).then(res => res.json());
    result.push(comment);
  }

  return console.log(result)
}
foo();      