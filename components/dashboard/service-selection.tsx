import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const services = [
  {
    id: "ai-consulting",
    name: "AI Consulting",
    description: "Strategic AI implementation and consulting services"
  },
  {
    id: "machine-learning",
    name: "Machine Learning Solutions",
    description: "Custom machine learning model development and deployment"
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    description: "Advanced data analytics and business intelligence"
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    description: "Image and video analysis solutions"
  },
  {
    id: "nlp",
    name: "Natural Language Processing",
    description: "Text analysis and language processing solutions"
  }
];

interface ServiceSelectionProps {
  selectedService: string;
  onServiceChange: (value: string) => void;
}

export function ServiceSelection({ selectedService, onServiceChange }: ServiceSelectionProps) {
  const currentService = services.find(s => s.id === selectedService);

const handleEmailClick = () => {
    const subject = encodeURIComponent(`Inquiry about ${currentService?.name || 'AI Services'}`);
    const body = encodeURIComponent(`Hi EverestAI team,\n\nI'm interested in learning more about your ${currentService?.name || 'services'}.\n\nBest regards`);
    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=contact@everestai.com&su=${subject}&body=${body}`,
        '_blank'
    );
};

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your AI Services</CardTitle>
        <CardDescription>Manage your service subscription and get support</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Selected Service</label>
          <Select value={selectedService} onValueChange={onServiceChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {currentService && (
          <div className="pt-4">
            <h3 className="font-medium text-lg mb-2">{currentService.name}</h3>
            <p className="text-muted-foreground mb-4">{currentService.description}</p>
            <Button 
              variant="outline" 
              onClick={handleEmailClick}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}