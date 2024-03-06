import { Container } from "@/shared/ui/Container";
import { Title } from "./ui/Title";
import { Link } from "./ui/Link"
import { FormDropdown } from "@/shared/ui/dropdowns/FormDropdown";
import Image from "next/image";
import FooterImage from "@/shared/assets/images/footer-image.png";

export const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-5 border-b border-gray-200 py-20 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Title text="About"/>
            <Link text="About Indice"/>
            <Link text="Careers"/>
            <Link text="Recent News"/>
            <Link text="Investor Relations"/>
            <Link text="Content Guidelines"/>
            <Link text="Terms of Service"/>
            <Link text="Privacy Policy"/>
          </div>
          <div className="flex flex-col gap-2">
            <Title text="Discover"/>
            <Link text="Project Cost Guides"/>
            <Link text="Upcoming Events"/>
            <Link text="Mobile App"/>
            <Link text="Customer Support"/>
            <Link text="Developers"/>
            <Link text="Collections"/>
            <Link text="Our Blog"/>
          </div>
          <div className="flex flex-col gap-2">
            <Title text="Business With Indice"/>
            <Link text="Claim your Business"/>
            <Link text="Advertise on Indice"/>
            <Link text="Restaurant Owners"/>
            <Link text="Business Success Stories"/>
            <Link text="Business Support"/>
            <Link text="Blog for Business"/>
            <Link text="Privacy Policy"/>
          </div>
          <div className="flex flex-col gap-2">
            <Title text="Languages"/>
            <FormDropdown 
              placeholder="English" 
              className="text-cyan font-bold border-none"
            />
            <Title text="Countries"/>
            <FormDropdown 
              placeholder="United States" 
              className="text-cyan font-bold border-none"
            />
          </div>
        </div>
      </Container>
      <div className="pt-10 pb-[150px] relative">
        <Image src={FooterImage} alt="footer-image" style={{ position: "absolute", left: "0", top: "0" }}/>
        <Container>
          <div className="text-center text-gray-500">
            Copyright <span className="text-primary font-semibold">Indice</span> is Proudly Owned by <span className="text-cyan font-bold">EnvyTheme</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}