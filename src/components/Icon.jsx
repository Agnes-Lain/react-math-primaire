export default function Icon({isCorrect}) {
  if (isCorrect) {
    return <span>✅</span>
  } else {
    return <span>❌</span>
  }
}
