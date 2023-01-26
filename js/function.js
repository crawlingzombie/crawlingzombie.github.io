document.getElementById('portfolio').addEventListener ('click', function() {
    document.getElementById('video').style.display = 'block';
    document.getElementById('sectionSobreMi').style.display = 'none';
    document.getElementById('sectionEducacion').style.display = 'none';
    document.getElementById('sectionExperiencia').style.display = 'none';
    document.getElementById('sectionContacto').style.display = 'none';
} )

document.getElementById('sobreMi').addEventListener ('click', function() {
    document.getElementById('sectionSobreMi').style.display = 'block';
    document.getElementById('video').style.display = 'none';
    document.getElementById('sectionEducacion').style.display = 'none';
    document.getElementById('sectionExperiencia').style.display = 'none';
    document.getElementById('sectionContacto').style.display = 'none';
    
} )

document.getElementById('educacion').addEventListener ('click', function() {
    document.getElementById('sectionEducacion').style.display = 'block';
    document.getElementById('video').style.display = 'none';
    document.getElementById('sectionSobreMi').style.display = 'none';
    document.getElementById('sectionExperiencia').style.display = 'none';
    document.getElementById('sectionContacto').style.display = 'none';
    
} )

document.getElementById('experiencia').addEventListener ('click', function() {
    document.getElementById('sectionExperiencia').style.display = 'block';
    document.getElementById('video').style.display = 'none';
    document.getElementById('sectionSobreMi').style.display = 'none';
    document.getElementById('sectionEducacion').style.display = 'none';
    document.getElementById('sectionContacto').style.display = 'none';
    
} )

document.getElementById('contacto').addEventListener ('click', function() {
    document.getElementById('sectionContacto').style.display = 'block';
    document.getElementById('video').style.display = 'none';
    document.getElementById('sectionSobreMi').style.display = 'none';
    document.getElementById('sectionEducacion').style.display = 'none';
    document.getElementById('sectionExperiencia').style.display = 'none';
    
} )