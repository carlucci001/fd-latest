<?php
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\HTML\HTMLHelper;
use Joomla\CMS\Language\Text;
use Joomla\CMS\Uri\Uri;

$app = Factory::getApplication();
$wa  = $app->getDocument()->getWebAssetManager();
$template = $app->getTemplate(true);

// Add template CSS
$wa->registerAndUseStyle('template.tailwind', 'templates/' . $template->template . '/css/tailwind.min.css');
$wa->registerAndUseStyle('template.custom', 'templates/' . $template->template . '/css/custom.css');

// Add template JavaScript
$wa->registerAndUseScript('template.theme', 'templates/' . $template->template . '/js/theme.js', [], ['defer' => true]);
$wa->registerAndUseScript('template.main', 'templates/' . $template->template . '/js/main.js', [], ['defer' => true]);

// Get params
$params = $template->params;
$darkMode = $params->get('darkMode', 1);
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>"<?php echo $darkMode ? ' class="dark"' : ''; ?>>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <jdoc:include type="metas" />
    <jdoc:include type="styles" />
    <jdoc:include type="scripts" />
</head>

<body class="min-h-screen bg-gray-50 dark:bg-black">
    <!-- Top Bar -->
    <div class="bg-gray-100 dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <jdoc:include type="modules" name="top-bar" style="none" />
        </div>
    </div>

    <!-- Header -->
    <header class="fixed w-full z-50 bg-white dark:bg-black shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo Area -->
                <div class="flex items-center">
                    <jdoc:include type="modules" name="logo" style="none" />
                    <jdoc:include type="modules" name="header-left" style="none" />
                </div>

                <!-- Navigation -->
                <nav class="hidden md:flex items-center space-x-8">
                    <jdoc:include type="modules" name="menu" style="none" />
                </nav>

                <!-- Header Right -->
                <div class="flex items-center">
                    <jdoc:include type="modules" name="header-right" style="none" />
                    <jdoc:include type="modules" name="search" style="none" />
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary to-primary-700 dark:bg-black py-24">
        <jdoc:include type="modules" name="hero-main" style="none" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <jdoc:include type="modules" name="hero-content" style="none" />
            <jdoc:include type="modules" name="hero-buttons" style="none" />
        </div>
    </section>

    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Breadcrumbs -->
        <div class="bg-gray-100 dark:bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <jdoc:include type="modules" name="breadcrumbs" style="none" />
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <jdoc:include type="modules" name="main-top" style="none" />
            
            <div class="grid grid-cols-12 gap-8">
                <!-- Left Sidebar -->
                <div class="col-span-12 lg:col-span-3">
                    <jdoc:include type="modules" name="sidebar-left" style="none" />
                </div>

                <!-- Main Content -->
                <div class="col-span-12 lg:col-span-6">
                    <jdoc:include type="message" />
                    <jdoc:include type="component" />
                    <jdoc:include type="modules" name="main-content" style="none" />
                </div>

                <!-- Right Sidebar -->
                <div class="col-span-12 lg:col-span-3">
                    <jdoc:include type="modules" name="sidebar-right" style="none" />
                </div>
            </div>

            <jdoc:include type="modules" name="main-bottom" style="none" />
        </div>

        <!-- Featured Section -->
        <div class="bg-white dark:bg-gray-900 py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <jdoc:include type="modules" name="featured-1" style="none" />
                    <jdoc:include type="modules" name="featured-2" style="none" />
                    <jdoc:include type="modules" name="featured-3" style="none" />
                    <jdoc:include type="modules" name="featured-4" style="none" />
                </div>
            </div>
        </div>

        <!-- Services Section -->
        <div class="bg-gray-50 dark:bg-black py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <jdoc:include type="modules" name="services-intro" style="none" />
                <jdoc:include type="modules" name="services-grid" style="none" />
                <jdoc:include type="modules" name="services-bottom" style="none" />
            </div>
        </div>

        <!-- CTA Sections -->
        <div class="bg-primary dark:bg-gray-900 text-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <jdoc:include type="modules" name="cta-top" style="none" />
                <jdoc:include type="modules" name="cta-main" style="none" />
                <jdoc:include type="modules" name="cta-bottom" style="none" />
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-primary dark:bg-black text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <!-- Footer Top -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <jdoc:include type="modules" name="footer-logo" style="none" />
                    <jdoc:include type="modules" name="footer-about" style="none" />
                </div>
                <div>
                    <jdoc:include type="modules" name="footer-menu" style="none" />
                </div>
                <div>
                    <jdoc:include type="modules" name="footer-services" style="none" />
                </div>
                <div>
                    <jdoc:include type="modules" name="footer-contact" style="none" />
                    <jdoc:include type="modules" name="footer-social" style="none" />
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="border-t border-gray-700 mt-12 pt-8">
                <jdoc:include type="modules" name="footer-bottom" style="none" />
                <p class="text-center text-gray-300">
                    &copy; <?php echo date('Y'); ?> <?php echo $app->get('sitename'); ?>. All rights reserved.
                </p>
            </div>
        </div>
    </footer>

    <!-- Special Positions -->
    <div class="fixed bottom-4 right-4 z-50">
        <jdoc:include type="modules" name="floating-buttons" style="none" />
    </div>

    <div class="hidden">
        <jdoc:include type="modules" name="popup-forms" style="none" />
    </div>

    <jdoc:include type="modules" name="debug" style="none" />
</body>
</html>
