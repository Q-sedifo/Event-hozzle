import { Container } from "@/shared/ui/Container";

const NotFound = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-center py-[50px] text-[40px] font-bold text-primary">
          Page not found
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
