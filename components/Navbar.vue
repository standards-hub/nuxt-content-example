<template>
  <header>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="background: rgb(255 255 255);border: 1px solid #d0c6c6;">
  <div class="container">
      <div class="navbar-header">
          <button class="navbar-toggle collapsed" aria-expanded="false" aria-controls="navbar" type="button" data-toggle="collapse" data-target="#navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img src="~static/assets/img/cim-text-hztl-color.png" style="max-width: 345px;margin-top: 5px;">
        </a>
      </div>
      <div class="navbar-collapse collapse" id="navbar">
        <ul class="nav navbar-nav">                  
                <li><a class="page-link" href="https://cloudinformationmodel.org" target="_blank" style="color: #000">Website</a></li>
                <li><NuxtLink to="/table" style="color: #000">Subject Areas</NuxtLink></li>
                <li><a class="page-link" target="_blank" href="https://github.com/cloudinformationmodel"><i class="fab fa-github-alt" style="color: #000"></i></a></li>
            
        </ul>
    </div>
      <!--/.nav-collapse -->
  </div>
  <!--/.container-fluid -->
</nav>
  </header>
</template>

