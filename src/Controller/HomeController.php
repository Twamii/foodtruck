<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\MenuRepository;
use App\Repository\LocalisationRepository;
use App\Repository\CityRepository;


final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(MenuRepository $menuRepository, LocalisationRepository $localisationRepository, CityRepository $cityRepository): Response
    {
        $burgers = $menuRepository->findByCategorie('burgers');
        $formules = $menuRepository->findByCategorie('formules');
        $extras = $menuRepository->findByCategorie('extras');
        $localisations = $localisationRepository->findAll();
        $city = $cityRepository->find(1);

       return $this->render('home/index.html.twig', [
        'burgers' => $burgers,
        'formules' => $formules,
        'extras' => $extras,
        'localisations' => $localisations,
        'city' => $city
        ]);
    }

}
