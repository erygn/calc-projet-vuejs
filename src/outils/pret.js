// CALCUL PRET
// console.log('Calcul du pret');
// console.log('------');

// let taux = 1.85;
// let montant_pret = 260000;
// let mensualite = -1;
// let assurance = 0.45;
// let duree = 180;

// console.log('Entre valeur');
// console.log('Montant_pret: ' + montant_pret);
// console.log('Duree: ' + duree);
// console.log('Taux: ' + taux);
// console.log('Mensualité: ' + mensualite);
// console.log('Assurance: ' + assurance);

// console.log(pret(duree, taux, mensualite, montant_pret, assurance));

// Fonction Pret
// eslint-disable-next-line no-unused-vars
function pret(duree, taux, mensualite, montant_pret, assurance) {

	// console.log('Calcul en cours');
	// console.log('------');
	// Déclaration des variables


	let crd = 0;

	let mensualite_nouvelle = 0;
	let erreur = 0.1;
	let previous_erreur = 10;
	let erreur_target = 0.0001;
	let facteur = 0.75;
	let last_optimized_value = 500;

	let interet_mois = 0;
	let interet_annee = 0;
	let interet_total = 0;

	let capital_mois = 0;
	let capital_annee = 0;

	let assurance_mois = 0;
	// eslint-disable-next-line no-unused-vars
	let assurance_annee = 0;

	// let i;
	// let j;

	let choix = 1;
	let nb_mois = duree*12;
	let nb_interactions = 1;
	let duree_type = 0;
	// let debug = 0;

	if (!duree_type) {
		nb_mois = duree;
	}
	if (taux >= 1) {
		taux = taux / 100;
	}
	if (assurance >= 0.01) {
		assurance = assurance / 100;
	}

	//Définition du choix de l'utilisateur

	if (duree <= 0) {
		choix = 1;
		nb_mois = 120;
	}

	if (taux < 0) {
		choix = 2;
		taux = 0.02;
	}

	if (mensualite < 0) {
		choix = 3;
	}

	if (montant_pret < 0) {
		choix = 4;
		montant_pret = 10000;
	}

	// *********** Rcherche de la valeur manquante ***********

	while (Math.abs(erreur) > erreur_target) {
		if (erreur < 0) {
			if (erreur > -0.2) {
				facteur = 1 + erreur/2;
			} else {
				facteur = 0.9;
			}
		} else {
			facteur = 1 + erreur;
		}


		// *** Durée ***
		if (choix == 1) {
			if (Math.abs(erreur) > Math.abs(previous_erreur)) {
				nb_mois = last_optimized_value;
				mensualite_nouvelle = calculer_mensualite(nb_mois, taux, montant_pret, assurance);
				break;
			}

			if (Math.abs(erreur) < 0.02) {
				break;
			}

			last_optimized_value = nb_mois;

			if (erreur > 0) {
				if (duree_type) {
					nb_mois = nb_mois - 12;
				} else {
					nb_mois = nb_mois -1;
				}
			} else {
				if (duree_type) {
					nb_mois = nb_mois + 12;
				} else {
					nb_mois = nb_mois +1;				
				}
			}
		}

		if (nb_mois < 0) { break; }


		// *** Choix 2 ***

		if (choix == 2) {
			taux = taux * facteur;
			if (taux < 0.0001) {
				taux = 0;
				break;
			}
		}

		// *** Choix 3 ***

		if (choix == 3) {
			mensualite = calculer_mensualite(nb_mois, taux, montant_pret, assurance);
			break;
		}


		// *** Choix 4 ***

		if (choix == 4) {
			montant_pret = montant_pret * facteur;
			break;
		}


		mensualite_nouvelle = calculer_mensualite(nb_mois, taux, montant_pret, assurance);
		previous_erreur = erreur;
		erreur = (mensualite - mensualite_nouvelle) / mensualite;

		nb_interactions++;

		if (nb_interactions > 1000) {
			break;
		}
	}
/*
	console.log('');
	console.log('Résultats ----------------');
	console.log('Montant Pret : ' + montant_pret);
	console.log('Durée : ' + nb_mois);
	console.log('Taux : ' + parseFloat(taux*100).toFixed(2));
	console.log('Mensualité : ' + parseFloat(mensualite).toFixed(2));
	console.log('Mensualité obtenue : ' + parseFloat(mensualite_nouvelle).toFixed(2));
	console.log('Assurance : ' + parseFloat(assurance*100).toFixed(2));
	console.log('Erreur : ' + erreur*100);
	console.log('---------');
	console.log('Nb itération : ' + nb_interactions);
	console.log('Choix : ' + choix);
	console.log('---------');

	if (assurance) {
		// console.log('Année: \t Capital \t Intérêts \t Assurance \t Capital restant dû \n');
	} else {
		// console.log('Année: \t Capital \t Intérêts \t Capital restant dû \n');
	}

	crd = montant_pret;

	duree = nb_mois/12;

	if (nb_mois/12 > duree) {duree++;}
*/
	for (var k = 1; k <= duree; k++) {
		for (var l = 1; l <= 12 ; l++) {
			interet_mois = crd*taux/12;
			interet_annee = interet_annee + interet_mois;
			interet_total = interet_total+ interet_mois;

			assurance_mois = montant_pret*assurance/12;
			assurance_annee += assurance_mois;

			capital_mois = mensualite-interet_mois-assurance_mois;
			capital_annee = capital_annee + capital_mois;
			crd=crd-(capital_mois);
		}
		if (assurance) {
			// console.log(k + '\t' + capital_annee + '\t' + interet_annee + '\t' + assurance_annee + '\t' + crd);
		} else {
			// console.log(k + '\t' + capital_annee + '\t' + interet_annee+ '\t' + crd);
		}
		interet_annee = 0;
		capital_annee = 0;
		assurance_annee = 0;
	}
/*
	console.log('---------------');
	console.log('Cout du crédit: ' + interet_total);
	console.log('Total des mensualités: ' + mensualite*duree*12);
	console.log('---------------');
*/
	//return {montantPret: montant_pret, nombreMois: nb_mois, taux: parseFloat(taux*100).toFixed(2), mensualite: parseFloat(mensualite).toFixed(2), mensualite_nouvelle: parseFloat(mensualite_nouvelle).toFixed(2), assurance: parseFloat(assurance*100).toFixed(2), interetTotal: parseFloat(interet_total).toFixed(2), mensualiteTotal: parseFloat(mensualite*duree*12).toFixed(2)}
	return  [montant_pret, nb_mois, parseFloat(taux*100).toFixed(2), parseFloat(mensualite).toFixed(2), parseFloat(mensualite_nouvelle).toFixed(2), parseFloat(assurance*100).toFixed(2), parseFloat(interet_total).toFixed(2), parseFloat(mensualite*duree*12).toFixed(2)];
}


// Function calculer Mensualité
function calculer_mensualite(nb_mois, t, mp, a) {
	let montant_mensualite;
	let taux_mensuel = t / 12;

	montant_mensualite = (mp * taux_mensuel) / (1 - Math.pow(1 + taux_mensuel, -nb_mois)) + mp * a / 12;
	return montant_mensualite;
}

export { pret }