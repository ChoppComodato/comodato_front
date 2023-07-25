function Form() {
  return (
    <section>
      <form className="flex flex-col">
        <label className="m-2">
          Nombre:
          <input type="text" required className="border-2 border-black rounded-sm ml-2" />
        </label>
        <label className="m-2">
          Apellido:
          <input type="text" required className="border-2 border-black rounded-sm ml-2" />
        </label>
        <label className="m-2">
          DNI:
          <input type="text" required className="border-2 border-black rounded-sm ml-2" />
        </label>
        <label className="m-2">
          Dirección:
          <input type="text" required className="border-2 border-black rounded-sm ml-2" />
        </label>
        <label className="m-2">
          Teléfono:
          <input type="text" required className="border-2 border-black rounded-sm ml-2" />
        </label>
        <label className="m-2">
          e-mail:
          <input type="text" required className="border-2 border-black rounded-sm ml-2" />
        </label>
        <label className="m-2">
          Vehículo:
          <input type="text" required className="border-2 border-black rounded-sm ml-2" />
        </label>
        <label className="m-2">
          Patente:
          <input type="text" required className="border-2 border-black rounded-sm ml-2" />
        </label>
      </form>
    </section>
  )
};

export default Form;