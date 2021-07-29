    // les modules

    // Semstre 1 

    var module_math1 = new Module("math1",  3, 6, [67, 33, 0], "Mathématiques 1");
    var module_phys1 = new Module("phys1",  3, 6, [67, 33, 0], "Physique 1");
    var module_sm    =  new Module("sm1",   3, 6, [67, 33, 0], "Chimie1");
    
    var module_tpphy1  = new Module("TPPhys1",  1, 2, [0,0, 100], "TP Physique 1");
    var module_tpchim1 = new Module("TPChim1",  1, 2, [0,0, 100], "TP Chimie 1");
    var module_info1   = new Module("info1",  2, 4, [50,0, 50], "Informatique 1");
    
    var module_dec1 =    new Module("dec1",    1, 2, [100, 0, 0], "Module découverte");
    
    var module_lang1 = new Module("Lang1", 1, 2,  [100,0,0], "Langue Etrangère 1 ");
    
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_math1, module_phys1, module_sm], "Fondamentale");
    var unite_uem_s1 = new Unite("U2_S1",[module_tpphy1, module_tpchim1, module_info1], "Méthodologique");
    var unite_ued_s1 = new Unite("U3_S1",[module_dec1], "Découverte");
    var unite_uet_s1 = new Unite("U4_S1",[module_lang1], "Transversale");
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uem_s1, unite_ued_s1, unite_uet_s1]);

    // Semstre 2 

    var module_math2 = new Module("math2",  3, 6, [67, 33, 0], "Mathématiques 2");
    var module_phys2 = new Module("phys2",  3, 6, [67, 33, 0], "Physique 2");
    var module_therm    =  new Module("therm",   3, 6, [67, 33, 0], "Thermodynamique");
    
    var module_tpphy2  = new Module("TPPhys2",  1, 2, [0,0, 100], "TP Physique 2");
    var module_tpchim2 = new Module("TPChim2",  1, 2, [0,0, 100], "TP Chimie 2");
    var module_info2   = new Module("info2",  2, 4, [67,0, 33], "Informatique 2");
    
    var module_dec2 =    new Module("dec2",    1, 2, [100, 0, 0], "Les métiers en Sciences et Technologies 2");
    
    var module_lang2 = new Module("Lang1", 1, 2,  [100,0,0], "Langue Etrangère 2 ");
    
    

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_math2, module_phys2, module_therm], "Fondamentale");
    var unite_uem_s2 = new Unite("U2_S2",[module_tpphy2, module_tpchim2, module_info2], "Méthodologique");
    var unite_ued_s2 = new Unite("U3_S2",[module_dec2], "Découverte");
    var unite_uet_s2 = new Unite("U4_S2",[module_lang2], "Transversale");
    
    

    //Semstre2

    var semestre2 = new Semestre("S2", [unite_uef1_s2, unite_uem_s2, unite_ued_s2 , unite_uet_s2]);
   // create_canevas(semestre1);
    // Year 
    var annee = new Year("L1SM", semestre1, semestre2);
    annee.create_canevas();
    create_menu("L1SM");

function main() {     
    // Calcul et traitement
    // calcul unit moy and credits
    annee.display_results();

}
$("document").ready(function() {
    $('input').val(0);
});

$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
