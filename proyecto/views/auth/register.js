<h2 class="text-center">Registro de usuarios</h2>

<div class="row justify-content-center">
    <div class="col col-sm-10 col-md-6 my-5">
         <!-- FORMULARIO -->
        <form action="/register" method="post">
            <div class="my-3">
                <label for="email" class="form-label">Correo: </label>
                <input type="email" class="form-control" name="email" id="email">
            </div>
            <div class="my-3">
                <label for="password" class="form-label">Contraseña: </label>
                <input type="password" class="form-control" name="password" id="password">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Guardar</button>
        </form>
    </div>
</div>
