import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import { ResumeSection } from '../store/resumeStore';

// Register fonts
Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Inter',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: '#666',
    marginBottom: 3,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2563eb',
    borderBottom: '1 solid #e5e7eb',
    paddingBottom: 5,
  },
  experienceItem: {
    marginBottom: 10,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
    color: '#666',
  },
  position: {
    fontSize: 11,
    fontWeight: 'medium',
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    marginBottom: 3,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    fontSize: 10,
    backgroundColor: '#f3f4f6',
    padding: '3 6',
    borderRadius: 3,
  },
});

interface PDFResumeProps {
  sections: ResumeSection[];
  personalInfo: any;
  experiences: any[];
  education: any[];
  skills: any[];
  projects: any[];
}

export const PDFResume = ({
  sections,
  personalInfo,
  experiences,
  education,
  skills,
  projects,
}: PDFResumeProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header with Personal Info */}
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.fullName}</Text>
        <Text style={styles.contact}>{personalInfo.email} • {personalInfo.phone}</Text>
        <Text style={styles.contact}>{personalInfo.location}</Text>
        {personalInfo.links?.map((link: any, index: number) => (
          <Text key={index} style={styles.contact}>
            {link.type}: {link.url}
          </Text>
        ))}
      </View>

      {/* Summary */}
      {personalInfo.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.description}>{personalInfo.summary}</Text>
        </View>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experiences.map((exp: any, index: number) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.companyHeader}>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.date}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </Text>
              </View>
              <Text style={styles.position}>{exp.position}</Text>
              {exp.description.map((desc: string, i: number) => (
                <Text key={i} style={styles.description}>
                  • {desc}
                </Text>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* Education */}
      {education.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu: any, index: number) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.companyHeader}>
                <Text style={styles.company}>{edu.school}</Text>
                <Text style={styles.date}>
                  {edu.startDate} - {edu.endDate}
                </Text>
              </View>
              <Text style={styles.position}>
                {edu.degree} in {edu.field}
                {edu.gpa && ` • GPA: ${edu.gpa}`}
              </Text>
              {edu.description.map((desc: string, i: number) => (
                <Text key={i} style={styles.description}>
                  • {desc}
                </Text>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skills}>
            {skills.map((skill: any, index: number) => (
              <Text key={index} style={styles.skill}>
                {skill.name}
              </Text>
            ))}
          </View>
        </View>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((project: any, index: number) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.companyHeader}>
                <Text style={styles.company}>{project.name}</Text>
                <Text style={styles.date}>
                  {project.startDate}
                  {project.endDate && ` - ${project.endDate}`}
                </Text>
              </View>
              <Text style={styles.description}>{project.description}</Text>
              <Text style={styles.description}>
                Technologies: {project.technologies.join(', ')}
              </Text>
              {project.link && (
                <Text style={styles.description}>Link: {project.link}</Text>
              )}
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export const generatePDF = async (resumeData: PDFResumeProps) => {
  return new Promise((resolve, reject) => {
    try {
      const blob = PDFResume(resumeData);
      resolve(blob);
    } catch (error) {
      reject(error);
    }
  });
}; 