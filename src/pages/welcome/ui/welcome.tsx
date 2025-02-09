import { Button } from "@heroui/button";
import { Spacer } from "@heroui/spacer";
import { SolutionsCard } from "@/widgets/solutions-card";
import { ScrollButton } from "@/shared/ui";
import { Tab, Tabs } from "@heroui/tabs";
import { Logo } from "@/widgets/logo";
import { BiGlobe, BiLogoTelegram } from "react-icons/bi";
import { Card, CardBody } from "@heroui/react";
import { Link } from "@heroui/link";

export default function Welcome() {
  return (
    <main>
      <div className="flex flex-col justify-center min-h-screen text-white p-5">
        <div className="flex flex-col justify-center min-h-screen text-white p-5">
          <div
            id="netrunner-logo"
            className="h-dvh flex flex-col items-center justify-center px-6 lg:px-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
              <div className="flex-shrink-0">
                <Logo/>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="relative w-full max-w-6xl mx-auto">
                  <h1
                    id="netrunner-text"
                    className="relative overflow-hidden bg-gradient-to-r from-black via-red-700 to-red-500 dark:from-white dark:via-white dark:to-red-600 text-transparent bg-clip-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 whitespace-nowrap"
                  >
                    NETRUNNER
                  </h1>
                </div>
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-md dark:text-gray-300 text-gray-900">
                  У нас есть курсы по обучению пентестингу, чтобы помочь вам стать экспертом в области
                  кибербезопасности.
                </p>
              </div>
            </div>

            <ScrollButton tag="netrunner-logo"/>
          </div>
        </div>

        {/* Карточки услуг */}
        <section id="services" className="mt-16 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SolutionsCard banner="assets/solutions/online.png" title="ONLINE EDUCATION">
              <div className={"flex flex-col justify-between h-full"}>
                <p className="text-sm text-gray-400 pt-2">
                  Наша компания предоставляет онлайн курсы по многим направлениям в сфере информационной безопасности.
                  Начиная от базовых знаний которые помогут вам продвинуться в ИБ, заканчивая топовыми курсами
                  разработанными совместно с нашими партнерами.
                </p>
                <div
                  className="grid xl:grid-cols-2 xl:grid-rows-1 xl:gap-x-2 grid-cols-1  grid-rows-2 gap-y-2 pt-5">
                  <Button as={Link} href="https://nrgroup.pro" variant="flat" className="w-full">
                    <BiGlobe/>
                    Web-платформа
                  </Button>
                  <Button as={Link} href="" variant="flat" className="w-full">
                    <BiLogoTelegram/>
                    Telegram-платформа
                  </Button>
                </div>
              </div>
            </SolutionsCard>

            <SolutionsCard banner="assets/solutions/business.png" title="SOLUTIONS FOR BUSINESS">
              <Spacer y={2}/>
              <p className="text-sm ">
                Компания предоставляет широкий спектр услуг для малого и среднего бизнеса:
              </p>
              <Spacer y={5}/>
              <div className="flex w-full flex-col">
                <Tabs aria-label="Options"  variant={"bordered"} fullWidth>
                  <Tab key="photos" title="Photos">
                    <Card>
                      <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="music" title="Music">
                    <Card>
                      <CardBody>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="videos" title="Videos">
                    <Card>
                      <CardBody>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
              </div>
            </SolutionsCard>

            <SolutionsCard banner="assets/solutions/offline.png" title="OFFLINE PROJECT">
              <Spacer y={2}/>
              <p className="text-default-500">
                Мы собираемся насытить рынок качественными специалистами с сфере информационной безопасности. Запуск доп
                образования в школах сильно поможет нам в достижения этой цели.
              </p>
            </SolutionsCard>
          </div>
        </section>
      </div>
    </main>
  );
}
