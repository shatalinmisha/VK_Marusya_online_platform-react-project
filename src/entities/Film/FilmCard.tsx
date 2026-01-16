type FilmCardProps = {
  movie: Movie
  onClick: () => void
}

export const FilmCard = ({ movie, onClick }: FilmCardProps) => {
  return (
    <div onClick={onClick}>
      <img src={movie.posterUrl} />
      <h4>{movie.title}</h4>
      <span>{movie.rating}</span>
    </div>
  )
}