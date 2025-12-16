import { View, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';

export default function ServicesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServiceCard
            service={item}
            onPress={() => router.push(`/services/${item.id}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

import { View, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';

export default function ServicesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServiceCard
            service={item}
            onPress={() => router.push(`/services/${item.id}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { padding: 16 } });
