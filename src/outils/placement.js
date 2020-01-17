
// let taux = -1;
// let droits_entree = 4.8;
// let mensualite = 1000;
// let capital_depart = 000;
// let capital_fin = 260000;
// let nb_mois = 180;

// placement(taux, mensualite, capital_depart, capital_fin, nb_mois, droits_entree);

// eslint-disable-next-line no-unused-vars
function placement(nb_mois, capital_depart, mensualite, capital_fin, taux, droits_entree) {
	
	let capital_nouveau = 0;
	let erreur = 0.1;
	let previous_erreur = 10;
	let erreur_target = 0.0001;
	let facteur = 0.8;
	let last_optimized_value = 500;

	let choix = 1;

	let nb_iterations = 1;
	// let debug = 1;


	if (taux>= 1) {
		taux = taux/100;
	}

	if (droits_entree >= 1) {
		droits_entree = droits_entree /100;
	}

	if (nb_mois <= 0) {
		choix = 1;
		nb_mois = 250;
	}

	if (taux < 0) {
		choix = 2;
		taux = 0.1;
	}

	if (mensualite < 0) {
		choix = 3;
		mensualite = 100;
	}

	if (capital_depart < 0) {
		choix = 4;
		capital_depart = 100;
	}

	if (capital_fin < 0) {
		choix = 5;
		capital_fin = calculer_capital_mois(nb_mois, mensualite, taux, capital_depart, droits_entree);
		erreur = 0;
	}


	while (Math.abs(erreur) > erreur_target) {
		if (erreur < 0) {
			if (erreur > -0.2) {
				facteur = 1+erreur/2;
			} else {
				facteur = 0.9;
			}
		} else {
			facteur = 1+erreur;
		}


		if (choix == 1) {
			if (Math.abs(erreur) > Math.abs(previous_erreur)) {
				nb_mois = last_optimized_value;
				capital_nouveau = calculer_capital_mois(nb_mois, mensualite, taux, capital_depart, droits_entree);
				erreur = (capital_fin - capital_nouveau) / capital_fin;

				break;
			}
			if (Math.abs(erreur) < 0.002) {
				break;
			}

			last_optimized_value = nb_mois;
			if (erreur < 0) {
				nb_mois = nb_mois-1;
			} else {
				nb_mois = nb_mois +1;
			}
		}


		if (choix == 2) {
			if (nb_iterations != 1) {
				taux = taux*facteur;
			}
		}

		if (choix == 3) {
			if (Math.abs(last_optimized_value - mensualite) < 0.5) {
				break;
			}

			last_optimized_value = mensualite;

			mensualite = mensualite * facteur;
		}

		if (choix == 4) {
			capital_depart = capital_depart * facteur;
		}

		capital_nouveau = calculer_capital_mois(nb_mois, mensualite, taux, capital_depart, droits_entree);

		previous_erreur = erreur;
		erreur = (capital_fin - capital_nouveau) / capital_fin;

		if (nb_iterations == 1) { previous_erreur = 2 * erreur }

		nb_iterations++;

		if (nb_iterations > 200) {
			break;
		}

	}

/*
	console.log('choix: ' + choix);
	console.log('duree: ' + nb_mois);
	console.log('Frais entre: ' + droits_entree*100);
	console.log('Taux interet: ' + taux*100);
	console.log('mensualite : ' + mensualite);
	console.log('capital dep ' + capital_depart);
	console.log('capital fin: ' + capital_fin);
	console.log('captal nouveau: ' + capital_nouveau);
	console.log('erreur: ' + erreur*100);
	console.log('Nb iterations: ' + nb_iterations-1);
 */
	taux = taux*100;
	droits_entree = droits_entree*100;

	return [nb_mois, parseFloat(capital_depart).toFixed(2), parseFloat(mensualite).toFixed(2), parseFloat(capital_fin).toFixed(2), parseFloat(taux).toFixed(2), parseFloat(droits_entree).toFixed(2)];
}


function calculer_capital_mois(nb_m, m, taux, capital_depart, droits_entree) {
	let capital = capital_depart*( 1 - droits_entree);
	let taux_mensuel = taux / 12;

	for (var j = 1; j <= nb_m; j++) {
		if (j == 1) {
			capital = capital+m*(1- droits_entree);
		} else {
			capital = capital*(1+taux_mensuel)+m*(1- droits_entree);
		}
	}

	return capital;
}

// eslint-disable-next-line no-unused-vars
function calculer_capital_annees(duree, m, taux, capital_depart, droits_entree) {
	let capital = capital_depart*(1 - droits_entree);
	let taux_mensuel = taux / 12;

	for (var i = 1; i <= duree; i++) {
		for (var nb_mois = 1; nb_mois <= 12; nb_mois++) {
			if (i+nb_mois == 2) {
				capital = capital+m*(1 - droits_entree);
			} else {
				capital = capital*(1 + taux_mensuel)+m*(1 - droits_entree);
			}
		}
	}

	return capital;
}


export { placement }