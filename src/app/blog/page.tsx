//ダミーデータ
const articles = [
  {id: 1, title: "タイトル１"},
  {id: 2, title: "タイトル２"},
  {id: 3, title: "タイトル３"},
]

//3秒待機
async function fetchArticles() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return articles
}

export default async function BlogPage() {
  const articles = await fetchArticles()
  return (
    <div>
      <ul>
        { articles.map((article) => (
          <li key={article.id}>
            title: {article.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
