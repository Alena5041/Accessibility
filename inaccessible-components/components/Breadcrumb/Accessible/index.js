export default function Breadcrumb() {
  const data = [
    {
      id: 1,
      text: 'Breadcrumb level 1',
      url: '#'
    },
    {
      id: 2,
      text: 'Breadcrumb level 2',
      url: '#'
    },
    {
      id: 3,
      text: 'Breadcrumb level 3',
      url: '#'
    }
  ]

  return (
    <div className="a-breadcrumb" id="a-breadcrumb">
      <nav aria-label="breadcrumbs">
        <ol className="a-breadcrumb__list">
          {data.map((item, index) => (
            <li key={item.id} className="a-breadcrumb__list-item">
              <a href={item.url} className="a-breadcrumb__link" aria-label={`Breadcrumb ${item.text}`}>{item.text}</a>
            </li>
          ))}
        </ol>
      </nav>

    </div>
  )
}
