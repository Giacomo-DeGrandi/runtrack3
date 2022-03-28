<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css"  type="text/css">
    <script src="script.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <style>
        .maindiv {
            display:flex;
            flex-direction:column;
            flex-wrap: wrap;
            align-items: center;
            width:100%;
            background-color: darkgray;
        }
        .myprogressbarbegin {
            height:20px;
            border:solid 1px black;
            background-color: goldenrod;
            width:30px;
            border-right:none;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
        }
        .myprogressbarmiddle {
            height:20px;
            border:solid 1px black;
            background-color: goldenrod;
            width:30px;
            border-right:none;
            border-left:none;
        }
        .myprogressbarend {
            height:20px;
            border:solid 1px black;
            background-color: goldenrod;
            width:30px;
            border-left:none;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 2px;
        }
        #backprogress {
            position:absolute;
        }
        #backprogress div {
            position:relative;
        }
        #upprg {
            position:relative
        }
    </style>
</head>
<body>
<main>
    <header class="d-flex flex-row flex-wrap align-items-start justify-content-between w-25 p-2">
       <h3 class="text-black-50">LPTF</h3>
        <a href="https://laplateforme.io/" class="text-dark">Accueil</a>
        <a href="" class="text-secondary">Units</a>
        <a href="" class="text-muted">Jobs</a>
        <a href="" class="text-black-50">Skills</a>
    </header>
    <div class="container-fluid">
        <div class="maindiv" >
            <div class="d-flex flex-row px-2">
                <p class="display-4">La Plateforme_</p>
            </div>

            <div class="d-flex flex-row ">

                <div class="container-fluid">
                    <div class="row">

                        <div class="col-sm-2">
                            <div class="align-items-center">
                                <div class="card" style="width: 18rem;">
                                    <img src="fly.webp" alt="butterfly" class="img-thumbnail border-0">
                                    <div class="card-body">
                                        <h5 class="card-title">Un Papillon</h5>
                                        <p class="card-text">C'est un peu commme une chenille mais sans ailes.<br> Ne pas ingerer</p>
                                        <a href="#" class="btn btn-primary">Commander votre propre papillon</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-7 offset-1">
                            <div class=" jumbotron bg-light ">
                                <p class="display-4 mt-3">Bonjour, monde!</p>
                                <p class="lead lh-lg">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                                <hr>
                                <p class="display-6">
                                    unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                                <button class="btn btn-danger">
                                    Rebooter le monde
                                </button>


                                <nav aria-label="Page navigation example" class="float-end mt-2">
                                    <div class="d-flex flex-row align-items-center justify-content-end mt-3">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        <div class="col-sm-2">
                            <div class="p-2">
                                <ul class="list-group">
                                    <li class="list-group-item active" aria-current="true">An active item</li>
                                    <li class="list-group-item">A second item</li>
                                    <li class="list-group-item">A third item</li>
                                    <li class="list-group-item">A fourth item</li>
                                    <li class="list-group-item">And a fifth one</li>
                                    <li class="list-group-item">And a fifth one</li>
                                    <li class="list-group-item">And a fifth one</li>
                                    <li class="list-group-item">And a fifth one</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-column align-items-center">
                <h5>Installation de AI 9000</h5>
                <div class="d-flex flex-row align-items-center" id="upprg">
                    <div class="myprogressbarbegin">
                     </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarend">
                    </div>
                </div id=>
                <div class="d-flex flex-row align-items-center" id="backprogress">
                    <div class="myprogressbarbegin">
                     </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarmiddle">
                    </div>
                    <div class="myprogressbarend">
                    </div>
                </div>

            </div>


            <div class="d-flex flex-row w-100 mb-5 p-4">

                <div class="col-lg-4 offset-lg-2">
                    <h5 class="text-nowrap">Recevez votre copie d'Internet 2!</h5>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control small" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text" id="basic-addon2">@example.com</span>
                    </div>

                    <label for="basic-url" class="form-label">URL 2 internet and BETA 2.1</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon3">DogeCoin</span>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                    </div>


                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">https://l33t.lptf/dkwb/berlusconimkt</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>


                </div>

                <div class="col-xl-3 offset-md-1">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>


            </div>
    </div>
</main>
</body>
</html>