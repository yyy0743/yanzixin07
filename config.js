var config = {
    style: 'mapbox://styles/2946408305/cm71awoj101aq01sda3bodutm',
    accessToken: 'pk.eyJ1IjoiMjk0NjQwODMwNSIsImEiOiJjbGViMTFydXQwN2xuM3FsZTFkaHNzNmNpIn0.ey4Fk_gCTT9Ml-HdU71s8g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Is healthcare access sufficient in Singapore?',
    subtitle: 'Analysis of Healthcare Facilities Coverage for HDB in Singapore',
    byline: 'By YAN ZIXIN',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Distribution of HDB in Singapore',
            description: 'A well-distributed healthcare system is essential for ensuring that all residents have convenient access to medical services. While Singapore has a robust healthcare network, disparities may exist in how easily residents can reach essential facilities. </a> <br><br> In this visualization, we start by mapping the distribution of HDB residential locations across Singapore. This first map shows where people live, setting the foundation for analyzing whether healthcare facilities are adequately positioned to serve these communities.<br><br><img src="asset/hdb-flat.jpg" style="height:100%;width:400px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0               
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 1
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 1               
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 1              
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Distribution of hospitals, clinics and pharmacies in Singapore',
            description: 'Hospitals, clinics, and pharmacies form the backbone of Singapore’s healthcare system, providing essential medical services to residents. The accessibility of these facilities can greatly impact public health and overall well-being. This map visualizes the distribution of hospitals, clinics, and pharmacies across Singapore. <br><br><img src="asset/chapter 2.jpg" style="height:100%; width:400px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 1
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 1               
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 1                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0                
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0               
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Coverage of hospital',
            description: 'This map illustrates the coverage of hospitals for HDB estates. Based on the standards from Healthcare Accessibility studies, as well as urban planning and public service allocation practices, a 1,000m buffer zone is set to represent hospital coverage.The map reveals that hospitals are primarily concentrated in the central region of Singapore, with a relatively sparse distribution in other areas. Some HDB residential zones fall entirely outside the hospital coverage area, with a hospital service coverage rate of 0. This indicates that residents in these areas may need longer commuting times to access hospital services.<br><br><img src="asset/hospital.jpg" style="height:100%; width:450px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 1              
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 1
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0                
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 1
                }
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Coverage of clinic',
            description: 'This map illustrates the coverage of clinics for HDB estates. Based on the standards from Healthcare Accessibility studies, as well as urban planning and public service allocation practices, a 500m buffer zone is set to represent clinic coverage.<br><br> The map reveals that clinics are more densely distributed in the central and eastern regions, with higher coverage rates, while their distribution is relatively sparse in the northern and western regions.<br><br><img src="asset/clinic.jpg" style="height:100%; width:450px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 1
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0               
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 1
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0                
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 1
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 1
                }
            ]
        },
        {
            id: 'fifth-container',
            alignment: 'right',
            hidden: false,
            title: 'Coverage of pharmacy',
            description: 'This map depicts the coverage of pharmacies for HDB estates. Following the standards from Healthcare Accessibility studies and principles of urban planning and public service allocation, a 500m buffer zone is established to represent pharmacy coverage.<br><br> The map indicates that pharmacies are primarily concentrated in the central and northeastern regions, providing higher coverage for HDB estates, whereas their distribution in other areas is relatively sparse.<br><br><img src="asset/pharmacy.jpg" style="height:100%; width:450px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0               
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 1                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0.5
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0                
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0.5                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 1
                }
            ]
        },
        {
            id: 'sixth-container',
            alignment: 'left',
            hidden: false,
            title: 'Overall healthcare facility coverage in Singapore',
            description: 'By overlaying the layers of the three healthcare facilities, this map illustrates the overall coverage of medical facilities for HDB estates in Singapore. Blue dots represent HDBs that fall within the coverage of healthcare facilities, while red dots indicate HDBs that are not covered by any medical facilities.<br><br><img src="asset/chapter 6.jpg" style="height:100%; width:450px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0               
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0.5
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 1
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 1
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 1
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 1                
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0.5                
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 1
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 0
                }
            ]
        },
        {
            id: 'seventh-container',
            alignment: 'right',
            hidden: false,
            title: 'Where are more medical facilities still needed?',
            description: 'Our mapping analysis reveals that the areas with the weakest healthcare facility coverage in Singapore are primarily located in the western region, particularly in Jurong West and Choa Chu Kang. Additionally, parts of the northern and eastern regions, such as Yishun, also exhibit lower healthcare accessibility.Limited healthcare facility coverage in these areas indicates potential challenges for residents in accessing essential medical services, which may lead to longer travel times and increased healthcare disparities.<br><br> Future urban planning efforts could focus on expanding healthcare infrastructure in these underserved regions by adding new clinics, pharmacies, or satellite hospitals. Enhancing public transportation connectivity to existing healthcare facilities and integrating telemedicine services may also help improve healthcare accessibility, ultimately benefiting residents.<br><br><img src="asset/chapter 7.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.71918, 1.36401],
                zoom: 13,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0               
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0               
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0.5
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 1
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 1
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinic-2qamrg',
                    opacity: 0
                },
                {
                    layer: 'hospital-dcgjq2',
                    opacity: 0                
                },
                {
                    layer: 'pharmacy-29hu2x',
                    opacity: 0               
                },
                {
                    layer: 'hpharmacy-84-dxywpf',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-cmx4m4',
                    opacity: 0
                },
                {
                    layer: 'clinic-84-32fipz',
                    opacity: 0
                },
                {
                    layer: 'pharmacy-84-3j0jdp',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-ag1c4w',
                    opacity: 0
                },
                {
                    layer: 'hospital-84-4dsda1',
                    opacity: 0
                },
                {
                    layer: 'hdb-84-729jml',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-9ypqr1',
                    opacity: 0
                }
            ]
        }
    ]
};