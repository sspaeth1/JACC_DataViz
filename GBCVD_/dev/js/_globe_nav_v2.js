// https://github.com/vasturiano/globe.gl/blob/master/example/choropleth-countries/index.html
const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);


// GDP per capita (avoiding countries with small pop)
const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
const colorSchemePlasma = ["#0d0887", "#100788", "#130789", "#16078a", "#19068c", "#1b068d", "#1d068e", "#20068f", "#220690", "#240691", "#260591", "#280592", "#2a0593", "#2c0594", "#2e0595", "#2f0596", "#310597", "#330597", "#350498", "#370499", "#38049a", "#3a049a", "#3c049b", "#3e049c", "#3f049c", "#41049d", "#43039e", "#44039e", "#46039f", "#48039f", "#4903a0", "#4b03a1", "#4c02a1", "#4e02a2", "#5002a2", "#5102a3", "#5302a3", "#5502a4", "#5601a4", "#5801a4", "#5901a5", "#5b01a5", "#5c01a6", "#5e01a6", "#6001a6", "#6100a7", "#6300a7", "#6400a7", "#6600a7", "#6700a8", "#6900a8", "#6a00a8", "#6c00a8", "#6e00a8", "#6f00a8", "#7100a8", "#7201a8", "#7401a8", "#7501a8", "#7701a8", "#7801a8", "#7a02a8", "#7b02a8", "#7d03a8", "#7e03a8", "#8004a8", "#8104a7", "#8305a7", "#8405a7", "#8606a6", "#8707a6", "#8808a6", "#8a09a5", "#8b0aa5", "#8d0ba5", "#8e0ca4", "#8f0da4", "#910ea3", "#920fa3", "#9410a2", "#9511a1", "#9613a1", "#9814a0", "#99159f", "#9a169f", "#9c179e", "#9d189d", "#9e199d", "#a01a9c", "#a11b9b", "#a21d9a", "#a31e9a", "#a51f99", "#a62098", "#a72197", "#a82296", "#aa2395", "#ab2494", "#ac2694", "#ad2793", "#ae2892", "#b02991", "#b12a90", "#b22b8f", "#b32c8e", "#b42e8d", "#b52f8c", "#b6308b", "#b7318a", "#b83289", "#ba3388", "#bb3488", "#bc3587", "#bd3786", "#be3885", "#bf3984", "#c03a83", "#c13b82", "#c23c81", "#c33d80", "#c43e7f", "#c5407e", "#c6417d", "#c7427c", "#c8437b", "#c9447a", "#ca457a", "#cb4679", "#cc4778", "#cc4977", "#cd4a76", "#ce4b75", "#cf4c74", "#d04d73", "#d14e72", "#d24f71", "#d35171", "#d45270", "#d5536f", "#d5546e", "#d6556d", "#d7566c", "#d8576b", "#d9586a", "#da5a6a", "#da5b69", "#db5c68", "#dc5d67", "#dd5e66", "#de5f65", "#de6164", "#df6263", "#e06363", "#e16462", "#e26561", "#e26660", "#e3685f", "#e4695e", "#e56a5d", "#e56b5d", "#e66c5c", "#e76e5b", "#e76f5a", "#e87059", "#e97158", "#e97257", "#ea7457", "#eb7556", "#eb7655", "#ec7754", "#ed7953", "#ed7a52", "#ee7b51", "#ef7c51", "#ef7e50", "#f07f4f", "#f0804e", "#f1814d", "#f1834c", "#f2844b", "#f3854b", "#f3874a", "#f48849", "#f48948", "#f58b47", "#f58c46", "#f68d45", "#f68f44", "#f79044", "#f79143", "#f79342", "#f89441", "#f89540", "#f9973f", "#f9983e", "#f99a3e", "#fa9b3d", "#fa9c3c", "#fa9e3b", "#fb9f3a", "#fba139", "#fba238", "#fca338", "#fca537", "#fca636", "#fca835", "#fca934", "#fdab33", "#fdac33", "#fdae32", "#fdaf31", "#fdb130", "#fdb22f", "#fdb42f", "#fdb52e", "#feb72d", "#feb82c", "#feba2c", "#febb2b", "#febd2a", "#febe2a", "#fec029", "#fdc229", "#fdc328", "#fdc527", "#fdc627", "#fdc827", "#fdca26", "#fdcb26", "#fccd25", "#fcce25", "#fcd025", "#fcd225", "#fbd324", "#fbd524", "#fbd724", "#fad824", "#fada24", "#f9dc24", "#f9dd25", "#f8df25", "#f8e125", "#f7e225", "#f7e425", "#f6e626", "#f6e826", "#f5e926", "#f5eb27", "#f4ed27", "#f3ee27", "#f3f027", "#f2f227", "#f1f426", "#f1f525", "#f0f724", "#f0f921"]
const colorGreys = ["#f2f2f2", "#e2e2e2", "#cecece", "#b4b4b4", "#979797", "#7a7a7a", "#5f5f5f", "#404040", "#1e1e1e", "#000000"]
const MA_CENTER_Egilsstaðir_Airport = { lat: 65.2833023071289, lng: -14.401399612426758, altitude: 0.4 }

let grabSelectedRegion = window.localStorage.getItem('selectedRegion')


fetch('./js//geojson/GeoJSON_regions2low.json').then(res => res.json()).then(countries => {
    // fetch('./js/geojson/GeoJSON_1132023_2.geojson').then(res => res.json()).then(countries => {
    // fetch('./continents.geojson').then(res => res.json()).then(countries => {

    const maxVal = Math.max(...countries.features.map(getVal));
    colorScale.domain([0, maxVal]);

    let latLong = { lat: 90, lng: 0 };
    const world = Globe({ alpha: true })
        .width(window.innerWidth)
        // .showGraticules(true)
        // .showAtmosphere(true)
        // .atmosphereColor("skyblue")
        .globeImageUrl('./imgs/earth-night2.jpeg')
        .backgroundColor('rgba(255, 255, 255, 0)')
        // .backgroundImageUrl('./imgs/night-sky_light.jpg')
        .lineHoverPrecision(5)
        .ringsData(latLong)
        .ringColor("#00ff00")
        .ringMaxRadius(180)
        .polygonsData(countries.features.filter(d => d))
        .polygonAltitude(0.02)
        .polygonCapColor((d, i) => 'rgba(255, 255, 255, 0)') //colorGreys[Math.ceil(Math.random() * 100)]) // colorGreys[i])
        .polygonSideColor(() => 'rgba(256,256,256, 0.15)')
        .polygonStrokeColor(() => '#ffffff')
        // .pointOfView(MA_CENTER_Egilsstaðir_Airport, 4000)
        .onPolygonClick(d => {
            console.log(` changed region to: ${d.properties.regn_nm}`) //, { lat, lng, altitude }
            window.localStorage.setItem("selectedRegion", d.properties.regn_nm)
            selectedRegion = d.properties.regn_nm
            grabSelectedRegion.innerHTML = d.properties.regn_nm
            document.querySelector('.selected-option').innerHTML = `<h3 class="selectedRegion"> ${d.properties.regn_nm} </h3>`
            drawScatterPlot(d.properties.regn_nm)
        }, { lat: 65.2833023071289, lng: -14.401399612426758 }
        )
        .polygonLabel(({ properties: d }) => `
        <div class="globeHover">
      <h3>${d.regn_nm}</h3>
      <p>
      CVD Mortality: <i>${d.Mortality}</i> M<br/>
      </p>
      <p>
      (<i>${d.Lower}</i> - <i>${d.Upper}</i>)
      </p>
      </div>
    `)
        .onPolygonHover(hoverD => world
            .polygonAltitude(d => d === hoverD ? 0.12 : 0.04)
            .polygonCapColor(d => d === hoverD ? '#CC8E3C' : 'rgba(255, 255, 255, .1)')
        )
        .polygonsTransitionDuration(300)
        (document.getElementById('globeViz'))

    // world.width = 2000
    console.log(world.scene())
    // world.controls({ zoomSpeed: 0.000000000001 })
    world.controls({ autoRotate: true, autoRotateSpeed: 2 })

    let worldControls = world.controls()
    let worldScene = world.scene()
    // let worldCamera = world.camera()
    worldControls.autoRotate = true;
    worldControls.autoRotateSpeed = -.15;
    worldControls.enableZoom = false
    // worldScene.position.x = -100
    // worldCamera.position.z = -100
    console.log("controls: ", world.controls())




});




// const world = Globe()
//     .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
//     .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
//     .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
//     (document.getElementById('globeViz'));

// custom globe material
// const globeMaterial = world.globeMaterial();
// globeMaterial.bumpScale = 10;
// new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
//     globeMaterial.specularMap = texture;
//     globeMaterial.specular = new THREE.Color('grey');
//     globeMaterial.shininess = 15;
// });

// setTimeout(() => { // wait for scene to be populated (asynchronously)
//     const directionalLight = world.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
//     directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
// });




let grabGlobe = document.getElementById('globeViz')

let pageHeight = document.body.clientHeight;

window.addEventListener('wheel', () => {
    // console.log(window.pageYOffset)
    // grabGlobe.style["z-index"] = 10;
    grabGlobe.style.position = "absolute";
    grabGlobe.style.top = `${window.pageYOffset}px`

    if (window.pageYOffset > pageHeight * .66) {
        grabGlobe.classList.add("shrinkGlobe");
        // (grabGlobe.classList.contains("growGlobe")) ? grabGlobe.classList.remove("growGlobe") : null;
    }

    // if (window.pageYOffset < pageHeight * .66) {
    //     grabGlobe.classList.add("growGlobe");
    //     (grabGlobe.classList.contains("shrinkGlobe")) ? grabGlobe.classList.remove("shrinkGlobe") : null;
    // }

    // function appendIt() {
    //     var source = document.getElementById("source");
    //     document.getElementById("destination").appendChild(source);
    // }

    //     <div id="source">
    //   <p>Source</p>
    // </div>

    // <div id="destination">
    //   <p>Destination</p>
    // </div>

    // <button onclick="appendIt()">Move Element</button>

}, { passive: true })