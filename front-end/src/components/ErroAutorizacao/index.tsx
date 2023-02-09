 export default function ErroAutorizacao(){
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-500 text-white text-center p-10 rounded-lg">
          <h1 className="text-2xl font-bold">401</h1>
          <p className="text-lg">Não Autorizado</p>
        </div>
      </div>
    )
}