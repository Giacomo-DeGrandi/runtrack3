<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>job03</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<main>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <form class="d-flex flex-column align-items-center py-5">
            <div class="column">
                <div class="p-2"><input type="number" id="myNumber"></div>
                <div class="p-2"><input type="text" class="form-control" placeholder="nom" id="nom"></div>
                <div class="p-2">
                    <label for="poke-select p-3">type</label>
                    <select class="form-select " aria-label="poke-select" id="select">
                        <option value="undefined">select a type</option>
                        <!-- my options -->
                    </select>
                </div>
            </div>
            <button type="button" id="filtrer" class="btn btn-outline-dark shadow-sm p-3">filter</button>
        </form>
        <div class="d-flex flex-wrap align-items-center justify-content-center flex-direction row w-100 bg-light" id="cards"></div>
    </div>
</main>
</body>
</html>