import { useLoaderData } from "react-router-dom";

export default function Index() {

  const {result} = useLoaderData();

  return (
    <>
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Documento</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.length > 0 ? (
                            result.map((curso) =>
                            <tr key={curso.id}>
                                <td>{ curso.id }</td>
                                <td>{ curso.name }</td>
                                <td>{ curso.hours_max }</td>
                                <td>{ curso.hours_max }</td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-success mx-2 my-1" title="Editar"><i className="bi bi-pencil-fill"></i></button>
                                    <button type="button" className="btn btn-sm btn-danger mx-2" title="Eliminar"><i className="bi bi-trash3"></i> </button>
                                </td>
                            </tr>
                            )
                        ) : (
                            <>
                                <tr>
                                    <td colSpan={4} className="text-center">
                                        <h5>Sin cursos registrados actualmente</h5>
                                    </td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}